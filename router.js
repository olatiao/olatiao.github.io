﻿(function () {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [{
			title: '前言',
			href: '/md/index',
			icon: 'index'
		}, {
			icon: 'index',
			title: '服务器',
			childList: [{
				title: 'Nginx 安装 Php 任何版本',
				href: '/md/php/php安装',
			}]
			// childList: [{
			// 	title: '基本操作',
			// 	childList: [{
			// 		title: '注册',
			// 		href: '/md/账户管理/基本操作/注册',
			// 	}, {
			// 		title: '登录',
			// 		href: '/md/账户管理/基本操作/登录',
			// 	}, {
			// 		title: '完善个人资料',
			// 		href: '/md/账户管理/基本操作/完善个人资料'
			// 	}, {
			// 		title: '修改密码',
			// 		href: '/md/账户管理/基本操作/修改密码'
			// 	}, {
			// 		title: '忘记密码',
			// 		href: '/md/账户管理/基本操作/忘记密码'
			// 	}]
			// }, {
			// 	title: '交易管理',
			// 	childList: [{
			// 		title: '查询交易记录',
			// 		href: '/md/账户管理/交易管理/查询交易记录',
			// 	}, {
			// 		title: '发票管理',
			// 		href: '/md/账户管理/交易管理/发票管理',
			// 	}]
			// }]
		}]
	};
})()