package com.root.route.util;

import java.util.HashMap;

import org.springframework.web.servlet.ModelAndView;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;


public class HttpUtil {
	public static ModelAndView makeHashToJsonModelAndView( 
			final HashMap<String, Object> map){
		JSONObject jsonObject = new JSONObject();
		jsonObject = JSONObject.fromObject(JSONSerializer.toJSON(map));
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("notification");
		mav.addObject("massage",jsonObject.toString());
		return mav;
	}

}
