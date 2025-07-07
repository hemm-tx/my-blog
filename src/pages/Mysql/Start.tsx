import { Template, ContentCard, DeclarationCard } from "@/components";

const Start = () => {
  return (
    <Template id="mysql-start">
      <Template.Content id="mysql-start-content">
        <ContentCard title="MySQL">
          <ContentCard.Text>SQL 是数据库管理系统（DBMS）的标准语言，用于执行数据库中的各种操作。</ContentCard.Text>
          <ContentCard.Paragraph title="MySQL 简介" id="mysql-start-introduction">
            <ContentCard.Text>
              MySQL 是一种开放源代码的关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL
              是最流行的关系型数据库管理系统之一，被广泛应用于 web 应用、移动应用、嵌入式应用、大数据分析、高性能计算、金融服务、电子商务等领域。
            </ContentCard.Text>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="MySQL 优点" id="mysql-start-advantages">
            <ContentCard.List
              list={[
                "开源免费：MySQL 是开源免费的，任何人都可以免费下载、安装、使用。",
                "性能优秀：MySQL 性能优秀，处理大数据量时速度非常快。",
                "功能丰富：MySQL 提供了丰富的功能，支持大量的应用场景。",
                "可靠性高：MySQL 具有高可靠性，数据安全性高。",
                "支持多种编程语言：MySQL 支持多种编程语言，如 PHP、Java、Python、C++、C#、JavaScript 等。",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="MySQL 缺点" id="mysql-start-disadvantages">
            <ContentCard.List
              list={[
                "功能不全：MySQL 功能不全，不支持一些复杂的功能，如事务处理等。",
                "不支持 NoSQL：MySQL 不支持 NoSQL，不支持非关系型数据库。",
                "不支持分布式：MySQL 不支持分布式，不支持多台服务器部署。",
                "不支持 ACID 事务：MySQL 不支持 ACID 事务，不支持事务处理。",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="MySQL 适用场景" id="mysql-start-applications">
            <ContentCard.List
              list={[
                "web 应用：MySQL 适用于 web 应用，如博客、论坛、商城等。",
                "移动应用：MySQL 适用于移动应用，如 Android、iOS 应用。",
                "嵌入式应用：MySQL 适用于嵌入式应用，如智能设备、车载系统等。",
                "大数据分析：MySQL 适用于大数据分析，如数据仓库、数据挖掘、日志分析等。",
                "高性能计算：MySQL 适用于高性能计算，如高性能计算、金融交易等。",
                "电子商务：MySQL 适用于电子商务，如电子商务网站、电子商务平台等。",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default Start;
