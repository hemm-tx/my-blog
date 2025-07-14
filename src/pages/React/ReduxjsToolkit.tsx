import { ContentCard, DeclarationCard, Template } from "@/components";

const ReactRedux = () => {
  return (
    <Template id="ReduxjsToolkit">
      <Template.Content id="ReduxjsToolkit-content">
        <ContentCard title="Reduxjs Toolkit 异步状态管理">
          <ContentCard.Text>
            Redux Toolkit 是一个用于构建 Redux 应用的工具包。它提供了一系列的函数和方法，帮助你更容易地管理 Redux 应用的状态。
          </ContentCard.Text>
          <ContentCard.Paragraph title="使用准备" id="ReduxjsToolkit-use-prepare">
            <ContentCard.Text>创建一个模拟异步请求的函数，用于获取数据：</ContentCard.Text>
            <ContentCard.Code
              language="typescript"
              code={[
                "const testFetchData = () => {",
                "  return new Promise((resolve) => {",
                "    setTimeout(() => {",
                "      resolve({ data: 'Hello Redux Toolkit' });",
                "    }, 1000);",
                "  });",
                "};",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建 Redux store" id="ReduxjsToolkit-create-store">
            <ContentCard.Text>
              使用 Redux Toolkit 的 createSlice 函数创建 Redux store，这里直接使用上章的 counter.ts 作为基础添加异步状态管理：
            </ContentCard.Text>
            <ContentCard.Code
              title="src/store/counter.ts"
              language="typescript"
              code={[
                'import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";',
                "",
                'export const fetchData = createAsyncThunk("counter/fetchData", async () => {',
                "  const response = await testFetchData();",
                "  return response.data;",
                "});",
                "",
                "const counterStore = createSlice({",
                '  name: "counter",',
                "  initialState: {",
                "    status: idle,",
                "    count: 0,",
                "  },",
                "",
                "  reducers: {",
                "    increment: (state) => {",
                "      state.count++;",
                "    },",
                "    decrement: (state) => {",
                "      state.count--;",
                "    },",
                "    incrementByAmount: (state, action: PayloadAction<number>) => {",
                "      state.count += action.payload;",
                "    },",
                "  },",
                "",
                "  extraReducers: (builder) => {",
                "    builder",
                "     .addCase(fetchData.pending, (state) => {",
                "        // 函数开始执行",
                "        state.status = 'loading';",
                "      })",
                "     .addCase(fetchData.fulfilled, (state, action) => {",
                "        // 函数执行成功",
                "        state.status = 'idle';",
                "        console.log(action.payload);",
                "      })",
                "     .addCase(fetchData.rejected, (state, action) => {",
                "        // 函数执行失败",
                "        state.status = 'error';",
                "        state.error = action.error.message;",
                "      });",
                "  },",
                "});",
                "",
                "export const { increment, decrement } = counterStore.actions;",
                "export default counterStore.reducer;",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用 Redux store" id="ReduxjsToolkit-use-store">
            <ContentCard.Text>在 App.tsx 中使用 Redux store：</ContentCard.Text>
            <ContentCard.Code
              title="src/App.tsx"
              language="TSX"
              code={[
                "import React, { useEffect } from 'react';",
                "import { useAppDispatch } from '@/store';",
                "import { fetchData } from '@/store/counter';",
                "",
                "function App() {",
                "  const dispatch = useAppDispatch();",
                "",
                "  useEffect(() => {",
                "    dispatch(fetchData()).unwrap().then(() => {",
                "        // 处理成功的结果",
                "    }).catch(() => {",
                "        // 处理失败的结果",
                "    });",
                "  }, []);",
                "",
                "  return <div>Hello Redux Toolkit</div>;",
                "}",
                "",
                "export default App;",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default ReactRedux;
