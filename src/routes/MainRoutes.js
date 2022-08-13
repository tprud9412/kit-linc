import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import TestLogin from 'pages/TestLogin/index';
import RegisterPost from 'pages/difficult-tech/RegisterProject/RegisterPost';
import ApproveProject from 'pages/difficult-tech/ApproveProject/index';
import PostTable from 'pages/difficult-tech/PostTable/index';
import DocumentManage from 'pages/difficult-tech/DocumentManage/DocumentManage';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - 애로 기술 관리
const DifficultTech = Loadable(lazy(() => import('pages/difficult-tech')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/difficult-techs',
            element: <PostTable />
        },
        {
            path: '/difficult-tech-create',
            element: <RegisterPost />
        },
        {
            path: '/difficult-tech-approval',
            element: <ApproveProject />
        },
        // manager, professor, company 각각 페이지 나눠야됨
        {
            path: '/difficult-tech-docs-upload',
            element: <DocumentManage />
        },
        {
            path: '/difficult-tech-docs-company',
            element: <DocumentManage />
        },
        {
            path: '/difficult-tech-docs-professor',
            element: <DocumentManage />
        },
        // professor, company 각각 페이지 나눠야됨
        {
            path: '/difficult-tech-continue-professor',
            element: <DifficultTech />
        },
        {
            path: '/difficult-tech-continue-company',
            element: <DifficultTech />
        },
        {
            path: 'shadow',
            element: <TestLogin />
        }
    ]
};

export default MainRoutes;
