package com.board.project.blockboard.dto;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Alias("FunctionDTO")
@Data
public class FunctionDTO {
    int functionID;
    int companyID;
    String functionName;
    String functionData;
}
