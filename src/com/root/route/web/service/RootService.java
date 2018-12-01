package com.root.route.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.root.route.web.dao.IRootDao;

@Service
public class RootService implements IRootService {
	@Autowired
    IRootDao iRootDao;
	
	@Override
	public HashMap<String, Object> test() {
		HashMap<String, Object> map = new HashMap<String, Object>();
		List<HashMap<String, Object>> testList = iRootDao.test();
	    map.put("testList", testList);
		return map;
	}
	

}
