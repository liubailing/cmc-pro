/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */

import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings
} from "@ant-design/pro-layout";
import React, { useEffect, ReactElement } from "react";
import Link from "umi/link";
import { connect } from "dva";
import { formatMessage } from "umi-plugin-react/locale";

import Authorized from "@/utils/Authorized";
import RightContent from "@/components/GlobalHeader/RightContent";
import { ConnectState, Dispatch } from "@/models/connect";
import { isAntDesignPro } from "@/utils/utils";

import { webSetting } from "../../config/defaultSettings";
import logo from "../assets/logo.svg";

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in "location"]: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};

/**
 * use Authorized check all menu item
 */
const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map(item => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : []
    };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const footerRender: BasicLayoutProps["footerRender"] = (_, defaultDom) => {
  if (!isAntDesignPro()) {
    // return defaultDom;
  }

  return defaultDom;
  // return React.cloneElement(defaultDom as ReactElement, {
  //   links: [{ link: webSetting.homePage, title: webSetting.sitName }],
  //   copyright: webSetting.copyRight
  // }
  // )
};

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, children, settings } = props;
  let isCollapsed = false;
  /**
   * constructor
   */

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: "account/setUserinfo"
      });
    }
  }, []);

  /**
   * init variables
   */
  const handleMenuCollapse = (payload: boolean): void => {
    isCollapsed = payload;
    dispatch &&
      dispatch({
        type: "global/changeLayoutCollapsed",
        payload
      })
  };

  return (
    <ProLayout
      logo={logo}
      title={webSetting.sitName}
      onCollapse={handleMenuCollapse}
      collapsed={isCollapsed}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: "/",
          breadcrumbName: formatMessage({
            id: "menu.home",
            defaultMessage: "Home"
          })
        },
        ...routers
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
        ) : (
            <span>{route.breadcrumbName}</span>
          );
      }}
      footerRender={footerRender}
      menuDataRender={menuDataRender}
      formatMessage={formatMessage}
      rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
    >
      {children}
    </ProLayout>
  );
};

export default connect(({ settings, account }: ConnectState) => ({
  settings,
  account
}))(BasicLayout);
