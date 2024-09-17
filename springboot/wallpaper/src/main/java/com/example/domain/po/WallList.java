package com.example.domain.po;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author HongWei
 * @since 2024-09-17
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("wall_list")
public class WallList implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "_id", type = IdType.NONE)
    private Long id;

    private Long classid;

    private String smallPicurl;

    private String tabs;

    private String description;

    private Integer score;

    private String nickname;


}
