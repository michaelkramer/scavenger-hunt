import React, { useState, useEffect } from "react";
import { useQueryParams } from "hookrouter";
import queryString from "query-string";
import { Table, Tag, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ApiRequest from "../../common/apiRequest";
import { Styles } from "../../theme/Style";

const Item = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const [items, setItems] = useState();
  //const [searchOption, setSearchOption] = useState();

  async function fetchItems() {
    const values = await ApiRequest(
      `/api/items?${queryString.stringify(queryParams)}`
    );
    if (values.data) {
      setItems(values.data);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [queryParams]);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={(node) => {
          //   searchInput = node;
          // }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // setSearchOption({
    //   searchText: selectedKeys[0],
    //   searchedColumn: dataIndex,
    // });
    const q = {};
    q[dataIndex] = selectedKeys[0];
    setQueryParams(q, true);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setQueryParams({}, true);
    //setSearchOption({ searchText: "", searchedColumn: null });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      ...getColumnSearchProps("tags"),
      render: (tags) => (
        <>
          {tags &&
            tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
  ];

  return (
    <div>
      <div>Filters Here</div>
      <Table columns={columns} dataSource={items} rowKey="id" />
    </div>
  );
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
  padding: { padding: "0 4px" },
  formBox: { width: "400px" },
});

export default Styles(styles)(Item);
