/**
 * @author Dongwook Kim <dongwook.kim1211@worksmobile.com>
 * @file CompanyMapper.java
 */
package com.board.project.blockboard.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface CompanyMapper {

  String selectCompanyNameByUserId(String userId);
}
