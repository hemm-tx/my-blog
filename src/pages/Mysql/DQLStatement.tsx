import { Template, ContentCard, DeclarationCard } from "@/components";

const DQLStatement = () => {
  return (
    <Template id="DQLStatement">
      <Template.Content id="DQLStatement-content">
        <ContentCard title="DQL Statement">
          <ContentCard.Text>DQL（Data Query Language）：数据库查询语言，用于查询记录、数据。</ContentCard.Text>
          <ContentCard.Paragraph title="基础查询" id="DQLStatement-basic-query">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 查询所有数据",
                "-- 语法：SELECT * FROM 表名;",
                "SELECT * FROM table_name;",
                "",
                "-- 查询指定列",
                "-- 语法：SELECT 列名1, 列名2 FROM 表名;",
                "SELECT column_name FROM table_name;",
                "",
                "-- 查询指定条件的数据",
                "-- 语法：SELECT DISTINCT 列名1, 列名2 FROM 表名 WHERE 条件;",
                "SELECT DISTINCT column_name FROM table_name WHERE condition;",
              ]}
            />
            <ContentCard.Note>DISTINCT：去除重复数据。</ContentCard.Note>
            <ContentCard.Note>WHERE：指定查询条件。</ContentCard.Note>
            <ContentCard.Text>条件查询：WHERE 子句用于指定查询条件，语法如下：</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 等于",
                "-- 语法：WHERE 列名 = 值;",
                "WHERE column_name = value;",
                "",
                "-- 不等于",
                "-- 语法：WHERE 列名 <> 值;",
                "WHERE column_name <> value;",
                "",
                "-- 大于",
                "-- 语法：WHERE 列名 > 值;",
                "WHERE column_name > value;",
                "",
                "-- 大于等于",
                "-- 语法：WHERE 列名 >= 值;",
                "WHERE column_name >= value;",
                "",
                "-- 小于",
                "-- 语法：WHERE 列名 < 值;",
                "WHERE column_name < value;",
                "",
                "-- 小于等于",
                "-- 语法：WHERE 列名 <= 值;",
                "WHERE column_name <= value;",
                "",
                "-- BETWEEN",
                "-- 语法：WHERE 列名 BETWEEN 值1 AND 值2;",
                "WHERE column_name BETWEEN value1 AND value2;",
                "",
                "-- LIKE",
                "-- 语法：WHERE 列名 LIKE '值%';",
                "WHERE column_name LIKE 'value%';",
                "",
                "-- IN",
                "-- 语法：WHERE 列名 IN (值1, 值2, 值3);",
                "WHERE column_name IN (value1, value2, value3);",
                "",
                "-- AND",
                "-- 语法：WHERE 列名1 = 值1 AND 列名2 = 值2;",
                "WHERE column_name1 = value1 AND column_name2 = value2;",
                "",
                "-- OR",
                "-- 语法：WHERE 列名1 = 值1 OR 列名2 = 值2;",
                "WHERE column_name1 = value1 OR column_name2 = value2;",
                "",
                "-- NOT",
                "-- 语法：WHERE NOT 列名 = 值;",
                "WHERE NOT column_name = value;",
              ]}
            />
            <ContentCard.Note>多个条件之间使用 AND 或 OR 连接。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="排序查询 ORDER BY" id="DQLStatement-order-query">
            <ContentCard.Text>ORDER BY 子句用于对结果集进行排序，语法如下：</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 按指定列排序",
                "-- 语法：SELECT 列名1, 列名2 FROM 表名 ORDER BY 列名 ASC/DESC;",
                "SELECT column_name FROM table_name ORDER BY column_name ASC/DESC;",
              ]}
            />
            <ContentCard.Note>ASC：升序，DESC：降序。如果不指定排序方式，默认升序。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="分组查询 GROUP BY" id="DQLStatement-group-query">
            <ContentCard.Text>GROUP BY 子句用于对结果集进行分组，语法如下：</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 按指定列分组",
                "-- 语法：SELECT 列名1, 列名2, function(列名) FROM 表名 GROUP BY 列名;",
                "SELECT column_name, function(column_name) FROM table_name GROUP BY column_name;",
              ]}
            />
            <ContentCard.Note>function(column_name)：指定聚合函数，如 COUNT、SUM、AVG、MAX、MIN。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="分页查询" id="DQLStatement-page-query">
            <ContentCard.Text>LIMIT 子句用于分页查询，语法如下：</ContentCard.Text>
            <ContentCard.Code
              language="SQL"
              code={["-- 语法：SELECT * FROM 表名 LIMIT offset, row_count;", "SELECT * FROM table_name LIMIT offset, row_count;"]}
            />
            <ContentCard.Note>offset：偏移量，从第几条开始；row_count：每页显示几条。</ContentCard.Note>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default DQLStatement;
