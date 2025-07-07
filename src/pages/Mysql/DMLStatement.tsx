import { Template, ContentCard, DeclarationCard } from "@/components";

const DMLStatement = () => {
  return (
    <Template id="DMLStatement">
      <Template.Content id="DMLStatement-content">
        <ContentCard title="DML Statement">
          <ContentCard.Text>DDL（Data Definition Language）：数据库操作语言，用于定义数据库记录、数据。</ContentCard.Text>
          <ContentCard.Paragraph title="INSERT 插入" id="DMLStatement-insert-data">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 语法：INSERT INTO 表名 (字段1, 字段2,...) VALUES (值1, 值2,...);",
                "INSERT INTO table_name (column1, column2,...) VALUES (value1, value2,...);",
                "",
                "-- 语法：INSERT INTO 表名 VALUES (值1, 值2,...);",
                "INSERT INTO table_name VALUES (value1, value2,...);",
                "",
                "-- 写两条数据试一下",
                "INSERT INTO classes (`stu_name`, `age`, `email`) VALUES ('stu1', 18, '12345@qq.com');",
                "-- 由于没有指定要插入的列，需要按照创建表时的序列插入所有列的数据。",
                "INSERT INTO classes VALUES ('2', 'stu2', 19, '12346@qq.com', '2025-06-10 16:56:40', '2025-06-10 16:56:40');",
              ]}
            />
            <ContentCard.Note>所有字符串数据必须使用单引号引用。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="UPDATE 更新" id="DMLStatement-update-data">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 语法：UPDATE 表名 SET 字段1 = 新值1, 字段2 = 新值2 WHERE 条件;",
                "UPDATE table_name SET column1 = new_value1, column2 = new_value2 WHERE condition;",
                "",
                "UPDATE classes SET age = 20, email = '13456@qq.com' WHERE stu_name = 'stu1';",
              ]}
            />
            <ContentCard.Note>WHERE 后可以加 AND，OR 等条件。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="DELETE 删除" id="DMLStatement-delete-data">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 语法：DELETE FROM 表名 WHERE 条件;",
                "DELETE FROM table_name WHERE condition;",
                "DELETE FROM classes WHERE stu_name = 'stu2';",
                "",
                "-- 语法：TRUNCATE FROM 表名;",
                "TRUNCATE TABLE table_name;",
              ]}
            />
            <ContentCard.Text>两者都能删除整个表，但是原理不同：</ContentCard.Text>
            <ContentCard.Text>TRUNCATE 会先 DROP TABLE，再 CREATE TABLE。效率上会更快</ContentCard.Text>
            <ContentCard.Text>TRUNCATE 删除的记录是无法回滚的。</ContentCard.Text>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default DMLStatement;
