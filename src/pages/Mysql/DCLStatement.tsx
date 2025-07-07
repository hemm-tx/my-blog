import { Template, ContentCard, DeclarationCard } from "@/components";

const DCLStatement = () => {
  return (
    <Template id="DCLStatement">
      <Template.Content id="DCLStatement-content">
        <ContentCard title="DCL Statement">
          <ContentCard.Text>DCL（Data Control Language）：数据库控制语言，用于定义访问权限和安全级别。</ContentCard.Text>
          <ContentCard.Paragraph title="创建用户" id="DCLStatement-create-user">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 语法：CREATE USER '用户名'@'地址' IDENTIFIED BY '密码';",
                "CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';",
                "CREATE USER 'username'@'%' IDENTIFIED BY 'password';",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="用户授权" id="DCLStatement-grant">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 授权用户权限",
                "-- 语法：GRANT 权限 ON 数据库对象 TO '用户名'@'地址';",
                "GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';",
                "GRANT SELECT, INSERT, UPDATE, DELETE ON mydatabase.* TO 'username'@'localhost';",
                "",
                "-- 撤销用户授权",
                "-- 语法：REVOKE 权限 ON 数据库对象 FROM '用户名'@'地址';",
                "REVOKE ALL PRIVILEGES ON *.* FROM 'username'@'localhost';",
                "REVOKE SELECT, INSERT, UPDATE, DELETE ON mydatabase.* FROM 'username'@'localhost';",
                "",
                "-- 查看用户权限",
                "-- 语法：SHOW GRANTS FOR '用户名'@'地址';",
                "SHOW GRANTS FOR 'username'@'localhost';",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="删除用户" id="DCLStatement-drop-user">
            <ContentCard.Code language="SQL" code={["-- 语法：DROP USER '用户名'@'地址';", "DROP USER 'username'@'localhost';", "DROP USER 'username'@'%';"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="修改用户密码" id="DCLStatement-alter-password">
            <ContentCard.Code
              language="SQL"
              code={[
                "-- 语法：ALTER USER '用户名'@'地址' IDENTIFIED BY '新密码';",
                "ALTER USER 'username'@'localhost' IDENTIFIED BY 'newpassword';",
                "ALTER USER 'username'@'%' IDENTIFIED BY 'newpassword';",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default DCLStatement;
