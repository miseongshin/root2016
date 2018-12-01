package com.root.route.web.dao;

import java.util.HashMap;
import java.util.List;

import org.springframework.dao.DataAccessException;

public interface IRootDao {

	public List<HashMap<String, Object>> test() throws DataAccessException;

}
