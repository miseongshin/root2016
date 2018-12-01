package com.root.route.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.root.route.util.HttpUtil;
import com.root.route.web.service.IRootService;

@Controller
public class RootController {
	@Autowired
	IRootService iRootService;
 
	@RequestMapping(value="/index")
	public ModelAndView main (HttpServletRequest request,
							  HttpServletResponse response,
							  ModelAndView mav ){
		HashMap<String, Object> map = new HashMap<String, Object>();
		mav.setViewName("index");
		return mav;
	}
	
	@RequestMapping(value="/test")
	public ModelAndView test (HttpServletRequest request,
							  HttpServletResponse response,
							  ModelAndView mav ){
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map = iRootService.test();
		System.out.println("*********************"+map);
		
		return HttpUtil.makeHashToJsonModelAndView(map);
	}
	
	@RequestMapping(value="/admin")
	public ModelAndView admin (HttpServletRequest request,
							  HttpServletResponse response,
							  ModelAndView mav ){
		HashMap<String, Object> map = new HashMap<String, Object>();
		mav.setViewName("admin/admin");
		return mav;
	}
	
	
}



