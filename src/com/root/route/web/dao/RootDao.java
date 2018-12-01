package com.root.route.web.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.PostConstruct;

import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;


@Repository
public class RootDao extends SqlSessionDaoSupport implements IRootDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;
	
	@PostConstruct
	void init() {
		setSqlSessionTemplate(sqlSessionTemplate);
	}

	@Override
	public List<HashMap<String, Object>> test() throws DataAccessException {
		return  getSqlSession().selectList("test.selectTestList");
	}

}

