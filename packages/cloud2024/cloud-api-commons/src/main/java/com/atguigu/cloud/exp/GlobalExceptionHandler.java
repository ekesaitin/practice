package com.atguigu.cloud.exp;

import cn.hutool.http.HttpStatus;
import com.atguigu.cloud.resp.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(RuntimeException.class)
    public Result runtimeEx(RuntimeException e) {
        log.error("运行时异常: {}", e.getMessage());
        return Result.fail(HttpStatus.HTTP_INTERNAL_ERROR, e.getMessage());
    }
}
