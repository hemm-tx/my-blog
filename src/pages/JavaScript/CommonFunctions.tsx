import { Template, ContentCard, DeclarationCard } from "@/components";

const CommonFunctions = () => {
  return (
    <Template id="js-CommonFunctions">
      <Template.Content id="js-CommonFunctions-content">
        <ContentCard title="js 实用工具函数">
          <ContentCard.Text>整理一些常用的 JavaScript 实用工具函数，在开发过程中可以轻松使用。</ContentCard.Text>
          <ContentCard.Paragraph title="防抖函数 debounce" id="js-CommonFunctions-content-debounce">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 防抖函数",
                "* @param {Function} fn 要执行的函数",
                "* @param {number} delay 延迟时间",
                "* @returns {Function}",
                "*/",
                "function debounce(fn, delay = 300) {",
                "  let timeout;",
                "  return (...args) => {",
                "    clearTimeout(timeout);",
                "    timeout = setTimeout(() => fn(...args), delay);",
                "  };",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="节流函数 throttle" id="js-CommonFunctions-content-throttle">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 节流函数",
                "* @param {Function} fn 要执行的函数",
                "* @param {number} delay 延迟时间",
                "* @returns {Function}",
                "*/",
                "function throttle(fn, delay = 300) {",
                "  let inThrottle;",
                "  return (...args) => {",
                "    if (!inThrottle) {",
                "      fn(...args);",
                "      inThrottle = true;",
                "      setTimeout(() => (inThrottle = false), delay);",
                "    }",
                "  };",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="深拷贝对象 deepClone" id="js-CommonFunctions-content-deep-clone">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 深拷贝对象",
                "* @param {any} obj 要拷贝的对象",
                "* @returns {any}",
                "*/",
                "function deepClone(obj) {",
                "  if (obj === null || typeof obj !== 'object') {",
                "    return obj;",
                "  }",
                "  const result = Array.isArray(obj)? [] : {};",
                "  for (const key in obj) {",
                "    if (obj.hasOwnProperty(key)) {",
                "      result[key] = deepClone(obj[key]);",
                "    }",
                "  }",
                "  return result;",
                "}",
                "",
                "// 或者使用lodash的cloneDeep方法",
                "import _ from 'lodash';",
                "const deepClone = (obj) => {",
                "  return _.cloneDeep(obj);",
                "}",
                "",
                "// 或者使用JSON.parse(JSON.stringify(obj))方法",
                "// 函数可能会丢失",
                "const deepClone = (obj) => {",
                "  return JSON.parse(JSON.stringify(obj));",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="格式化日期 formatDate" id="js-CommonFunctions-content-format-date">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 格式化日期",
                "* @param {Date} date 日期对象",
                "* @param {string} fmt 格式化字符串",
                "* @returns {string}",
                "*/",
                "function formatDate(date, fmt) {",
                "  const o = {",
                "    'M+': date.getMonth() + 1,",
                "    'd+': date.getDate(),",
                "    'h+': date.getHours(),",
                "    'm+': date.getMinutes(),",
                "    's+': date.getSeconds(),",
                "    'q+': Math.floor((date.getMonth() + 3) / 3),",
                "    'S': date.getMilliseconds()",
                "  };",
                "  if (/(y+)/.test(fmt)) {",
                "    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));",
                "  }",
                "  for (const k in o) {",
                "    if (new RegExp('(' + k + ')').test(fmt)) {",
                "      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));",
                "    }",
                "  }",
                "  return fmt;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="复制到剪贴板 copyToClipboard" id="js-CommonFunctions-content-get-url-params">
            <ContentCard.Code
              language="javascript"
              code={["function copyToClipboard(text) {", "  navigator.clipboard.writeText(text).catch(console.error);", "}"]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="生成随机数 getRandomNumber" id="js-CommonFunctions-content-get-random-number">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 生成随机数",
                "* @param {number} min 最小值",
                "* @param {number} max 最大值",
                "* @returns {number}",
                "*/",
                "function getRandomNumber(min, max) {",
                "  return Math.floor(Math.random() * (max - min + 1)) + min;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="生成随机颜色 getRandomColor" id="js-CommonFunctions-content-get-random-color">
            <ContentCard.Code
              language="javascript"
              code={[
                "function getRandomColor() {",
                "  const letters = '0123456789ABCDEF';",
                "  let color = '#';",
                "  for (let i = 0; i < 6; i++) {",
                "    color += letters[Math.floor(Math.random() * 16)];",
                "  }",
                "  return color;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="UUID 生成器" id="js-CommonFunctions-content-get-uuid">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 生成UUID",
                "* @returns {string}",
                "*/",
                "function getUUID() {",
                "  return crypto.randomUUID();",
                "}",
                "",
                "const crypto = window.crypto || window.msCrypto;",
                "if (!crypto) {",
                "  console.error('浏览器不支持 crypto 对象');",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="范围数组生成 getRangeArray" id="js-CommonFunctions-content-get-range-array">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 获取范围数组",
                "* @param {number} start 开始值",
                "* @param {number} end 结束值",
                "* @param {number} step 步长",
                "* @returns {number[]}",
                "*/",
                "function getRangeArray(start, end, step = 1) {",
                "  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="数组去重 unique" id="js-CommonFunctions-content-unique">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 数组去重",
                "* @param {any[]} arr 数组",
                "* @returns {any[]}",
                "*/",
                "function unique(arr) {",
                "  return [...new Set(arr)];",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="数组扁平化 flatten" id="js-CommonFunctions-content-flatten">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 数组扁平化",
                "* @param {any[]} arr 数组",
                "* @returns {any[]}",
                "*/",
                "function flatten(arr) {",
                "  return arr.reduce((acc, val) => acc.concat(Array.isArray(val)? flatten(val) : val), []);",
                "}",
                "",
                "// 不使用递归的方法",
                "const flatten = (arr) => {",
                "  return arr.flat(Infinity);",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="首字母大写 capitalize" id="js-CommonFunctions-content-capitalize">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 首字母大写",
                "* @param {string} str 字符串",
                "* @returns {string}",
                "*/",
                "function capitalize(str) {",
                "  return str.charAt(0).toUpperCase() + str.slice(1);",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="驼峰转下划线 camelCaseToHyphen" id="js-CommonFunctions-content-camel-case-to-hyphen">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 驼峰转下划线",
                "* @param {string} str 字符串",
                "* @returns {string}",
                "*/",
                "function camelCaseToHyphen(str) {",
                "  return str.replace(/([A-Z])/g, '-$1').toLowerCase();",
                "}",
                "",
                "/**",
                "* 下划线转驼峰",
                "* @param {string} str 字符串",
                "* @returns {string}",
                "*/",
                "function hyphenToCamelCase(str) {",
                "  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="数组排序 sort">
            <ContentCard.Code
              language="javascript"
              code={[
                "/**",
                "* 数组排序",
                "* @param {any[]} arr 数组",
                "* @param {string} key 排序字段",
                "* @param {string} order 排序顺序",
                "* @returns {any[]}",
                "*/",
                "function sort(arr, key, order = 'asc') {",
                "  return arr.sort((a, b) => {",
                "    if (a[key] < b[key]) {",
                "      return order === 'asc'? -1 : 1;",
                "    } else if (a[key] > b[key]) {",
                "      return order === 'asc'? 1 : -1;",
                "    } else return 0;",
                "  });",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default CommonFunctions;
