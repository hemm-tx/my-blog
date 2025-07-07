import { Display } from "@/components";

const items = [
  {
    label: "开始",
    key: "start",
  },
  {
    label: "DDL 定义",
    key: "ddl-statement",
  },
  {
    label: "DML 操作",
    key: "dml-statement",
  },
  {
    label: "DCL 控制",
    key: "dcl-statement",
  },
  {
    label: "DQL 查询",
    key: "dql-statement",
  },
  //   {
  //     label: "索引",
  //     key: "index",
  //   },
  //   {
  //     label: "视图",
  //     key: "view",
  //   },
  //   {
  //     label: "触发器",
  //     key: "trigger",
  //   },
  //   {
  //     label: "存储过程",
  //     key: "stored-procedure",
  //   },
  //   {
  //     label: "函数",
  //     key: "function",
  //   },
  //   {
  //     label: "事务",
  //     key: "transaction",
  //   },
  //   {
  //     label: "锁",
  //     key: "lock",
  //   },
  //   {
  //     label: "备份与恢复",
  //     key: "backup-and-recovery",
  //   },
  //   {
  //     label: "性能优化",
  //     key: "performance-optimization",
  //   },
  //   {
  //     label: "数据库维护",
  //     key: "database-maintenance",
  //   },
  //   {
  //     label: "数据库监控",
  //     key: "database-monitoring",
  //   },
  //   {
  //     label: "数据库扩展",
  //     key: "database-extension",
  //   },
];

export default function MysqlPage() {
  return <Display parentPath="mysql" items={items} />;
}
