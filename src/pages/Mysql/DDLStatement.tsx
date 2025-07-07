import { Template, ContentCard, DeclarationCard } from "@/components";
import { Table } from "antd";

const val_type_list = [
  { type: "TINYINT", desc: "小整型", size: "1 Bytes", range_signed: "-128~127", range_unsigned: "0~255" },
  { type: "SMALLINT", desc: "小整型", size: "2 Bytes", range_signed: "-32768~32767", range_unsigned: "0~65535" },
  { type: "MEDIUMINT", desc: "小整型", size: "3 Bytes", range_signed: "-8388608~8388607", range_unsigned: "0~16777215" },
  { type: "INT", desc: "整型", size: "4 Bytes", range_signed: "-2147483648~2147483647", range_unsigned: "0~4294967295" },
  { type: "BIGINT", desc: "大整型", size: "8 Bytes", range_signed: "-9223372036854775808~9223372036854775807", range_unsigned: "0~18446744073709551615" },
  { type: "FLOAT", desc: "单精度浮点数", size: "4 Bytes", range_signed: "-3.40282347E+38~3.40282347E+38", range_unsigned: "0~1.17549435E-38" },
  {
    type: "DOUBLE",
    desc: "双精度浮点数",
    size: "8 Bytes",
    range_signed: "-1.7976931348623157E+308~1.7976931348623157E+308",
    range_unsigned: "0~2.2250738585072014E-308",
  },
  { type: "DECIMAL", desc: "定点数", size: "n Bytes", range_signed: "/", range_unsigned: "/" },
];

const date_type_list = [
  { type: "DATE", desc: "日期", size: "3 Bytes", range: "1000-01-01~9999-12-31", format: "YYYY-MM-DD" },
  { type: "TIME", desc: "时间", size: "3 Bytes", range: "00:00:00~23:59:59", format: "HH:MM:SS" },
  { type: "YEAR", desc: "年份", size: "1 Bytes", range: "1901~2155", format: "YYYY" },
  { type: "DATETIME", desc: "日期时间", size: "8 Bytes", range: "1000-01-01 00:00:00~9999-12-31 23:59:59", format: "YYYY-MM-DD HH:MM:SS" },
  { type: "TIMESTAMP", desc: "时间戳", size: "4 Bytes", range: "1970-01-01 00:00:01~2038-01-19 03:14:07", format: "YYYY-MM-DD HH:MM:SS" },
];

const char_type_list = [
  { type: "CHAR(M)", desc: "定长字符串", size: "M Bytes", range: "0~255" },
  { type: "VARCHAR(M)", desc: "变长字符串", size: "M Bytes", range: "0~65535" },
  { type: "BINARY(M)", desc: "定长二进制字符串", size: "M Bytes", range: "0~255" },
  { type: "VARBINARY(M)", desc: "变长二进制字符串", size: "M Bytes", range: "0~65535" },
  { type: "TINYBLOB", desc: "短二进制字符串", size: "255 Bytes", range: "0~255" },
  { type: "TINYTEXT", desc: "短文本字符串", size: "255 Bytes", range: "0~255" },
  { type: "BLOB", desc: "长二进制字符串", size: "65535 Bytes", range: "0~65535" },
  { type: "TEXT", desc: "长文本字符串", size: "65535 Bytes", range: "0~65535" },
  { type: "MEDIUMBLOB", desc: "中等长二进制字符串", size: "16777215 Bytes", range: "0~16777215" },
  { type: "MEDIUMTEXT", desc: "中等长文本字符串", size: "16777215 Bytes", range: "0~16777215" },
  { type: "LONGBLOB", desc: "超长二进制字符串", size: "4294967295 Bytes", range: "0~4294967295" },
  { type: "LONGTEXT", desc: "超长文本字符串", size: "4294967295 Bytes", range: "0~4294967295" },
];

const DDLStatement = () => {
  const { Column } = Table;
  return (
    <Template id="DDLStatement">
      <Template.Content id="DDLStatement-content">
        <ContentCard title="DDL Statement">
          <ContentCard.Text>DDL（Data Definition Language）：数据定义语言，用于定义数据库对象，如库、表、视图、索引、存储过程等。</ContentCard.Text>
          <ContentCard.Paragraph title="操作数据库" id="DDLStatement-create-database">
            <ContentCard.Text>创建数据库：CREATE DATABASE 数据库名;</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 创建名为 mydatabase 的数据库",
                "CREATE DATABASE mydatabase;",
                "",
                "-- 创建名为 mydatabase 的数据库，如果数据库已存在，则忽略该语句",
                "CREATE DATABASE IF NOT EXISTS mydatabase;",
                "",
                "-- 创建名为 mydatabase 的数据库，并指定字符集和排序规则",
                "CREATE DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;",
              ]}
            />
            <ContentCard.Text>删除数据库：DROP DATABASE 数据库名;</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 删除名为 mydatabase 的数据库",
                "DROP DATABASE mydatabase;",
                "",
                "-- 删除名为 mydatabase 的数据库，如果数据库不存在，则忽略该语句",
                "DROP DATABASE IF EXISTS mydatabase;",
              ]}
            />
            <ContentCard.Text>修改数据库：ALTER DATABASE 数据库名 [选项];</ContentCard.Text>
            <ContentCard.Code language="SQL" code={["ALTER DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="数据类型" id="DDLStatement-data-type">
            <ContentCard.Text>数值类型</ContentCard.Text>
            <Table className="py-3" dataSource={val_type_list} rowKey="type" pagination={false} scroll={{ x: "max-content", y: "350px" }}>
              <Column title="类型" dataIndex="type" key="type" />
              <Column title="描述" dataIndex="desc" key="desc" />
              <Column title="大小" dataIndex="size" key="size" />
              <Column title="范围(有符号)" dataIndex="range_signed" key="range_signed" />
              <Column title="范围(无符号)" dataIndex="range_unsigned" key="range_unsigned" />
            </Table>
            <ContentCard.Note>DECIMAL(M,D)：M 表示总共有 M 位数，D 表示小数点右边有 D 位数。</ContentCard.Note>
            <ContentCard.Note>FLOAT(p)：p 表示小数点右边有 p 位数。</ContentCard.Note>
            <ContentCard.Text>日期和时间类型</ContentCard.Text>
            <Table className="py-3" dataSource={date_type_list} rowKey="type" pagination={false} scroll={{ x: "max-content", y: "350px" }}>
              <Column title="类型" dataIndex="type" key="type" />
              <Column title="描述" dataIndex="desc" key="desc" />
              <Column title="大小" dataIndex="size" key="size" />
              <Column title="范围" dataIndex="range" key="range" />
              <Column title="格式" dataIndex="format" key="format" />
            </Table>
            <ContentCard.Text>字符类型</ContentCard.Text>
            <Table className="py-3" dataSource={char_type_list} rowKey="type" pagination={false} scroll={{ x: "max-content", y: "350px" }}>
              <Column title="类型" dataIndex="type" key="type" />
              <Column title="描述" dataIndex="desc" key="desc" />
              <Column title="大小" dataIndex="size" key="size" />
              <Column title="范围" dataIndex="range" key="range" />
            </Table>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="操作表" id="DDLStatement-create-table">
            <ContentCard.Text>创建表：CREATE TABLE 表名 (字段定义列表);</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 创建名为 mytable 的表",
                "CREATE TABLE mytable (",
                "  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,",
                "  name VARCHAR(50) NOT NULL COMMENT '姓名',",
                "  age VARCHAR(2) NOT NULL,",
                "  email VARCHAR(100) NOT NULL,",
                "  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,",
                "  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                ");",
                "",
                "-- 创建名为 mytable 的表，如果表已存在，则忽略该语句",
                "CREATE TABLE IF NOT EXISTS mytable (",
                "  ...",
                ");",
              ]}
            />
            <ContentCard.List
              list={[
                "NOT NULL 表示该字段不能为空",
                "AUTO_INCREMENT 表示该字段值自动增长",
                "PRIMARY KEY 表示该字段为主键",
                "COMMENT 表示该字段的注释",
                "DEFAULT 表示设置默认值",
                "CURRENT_TIMESTAMP 表示当前时间",
                "ON UPDATE 表示该字段值更新时自动更新",
              ]}
            />
            <ContentCard.Text>删除表：DROP TABLE 表名;</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 删除名为 mytable 的表",
                "DROP TABLE mytable;",
                "",
                "-- 删除名为 mytable 的表，如果表不存在，则忽略该语句",
                "DROP TABLE IF EXISTS mytable;",
              ]}
            />
            <ContentCard.Text>修改表：ALTER TABLE 表名 [选项];</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 为 mytable 表添加 address 字段",
                "ALTER TABLE mytable ADD COLUMN address VARCHAR(100) NOT NULL DEFAULT '';",
                "",
                "-- 修改 mytable 表的 age 字段为 INT 类型，并设置 NOT NULL",
                "ALTER TABLE mytable MODIFY COLUMN age INT NOT NULL;",
                "",
                "-- 删除 mytable 表的 address 字段",
                "ALTER TABLE mytable DROP COLUMN address;",
                "",
                "-- 重命名 mytable 表为 classes",
                "ALTER TABLE mytable RENAME TO classes;",
                "",
                "-- 重命名 classes 表的 name 字段为 stu_name",
                "ALTER TABLE classes CHANGE COLUMN name stu_name VARCHAR(50) NOT NULL;",
                "",
                "-- 设置 classes 表的引擎为 INNODB",
                "ALTER TABLE classes ENGINE=INNODB;",
              ]}
            />
            <ContentCard.List
              list={[
                "ADD COLUMN 增加字段",
                "MODIFY COLUMN 修改字段",
                "DROP COLUMN 删除字段",
                "RENAME TO 重命名表",
                "CHANGE COLUMN 重命名字段",
                "ENGINE 设置表引擎",
              ]}
            />
            <ContentCard.Text>其他操作</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 查看表结构：DESCRIBE 表名;",
                "DESCRIBE classes;",
                "",
                "-- 显示表的创建语句：SHOW CREATE TABLE 表名;",
                "SHOW CREATE TABLE classes;",
                "",
                "-- 查看表索引：SHOW INDEX FROM 表名;",
                "SHOW INDEX FROM classes;",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default DDLStatement;
