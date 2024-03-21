package com.sboot;

import com.sboot.mapper.EmpMapper;
import com.sboot.pojo.Emp;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
public class EmpTest {
    @Autowired
    EmpMapper empMapper;

    @Test
    public void testDelete() {
        empMapper.delete(17);
    }

    @Test
    public void testInsert() {
        Emp emp = new Emp();
        emp.setUsername("Tom");
        emp.setName("汤姆");
        emp.setImage("tom.jpg");
        emp.setGender((short) 1);
        emp.setJob((short) 1);
        emp.setEntryDate(LocalDate.of(2020, 2, 12));
        emp.setDeptId(1);
        empMapper.insert(emp);
    }

    @Test
    public void testUpdate() {
        Emp emp = new Emp();
        emp.setId(18);
        emp.setUsername("Tom1");
        emp.setName("汤姆1");
        empMapper.update(emp);
    }


    @Test
    public void testSelectEmp() {
        Emp emp = empMapper.getEmpById(10);
        System.out.println(emp);
    }

    @Test
    public void testSelectEmps () {
//        var emps = empMapper.getEmps("张", (short) 1, LocalDate.of(2000, 1, 1), LocalDate.of(2020, 12, 31));
        var emps = empMapper.getEmps("张", (short) 1, null, null);
        emps.forEach(System.out::println);
    }
}
