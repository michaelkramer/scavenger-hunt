import React, { useState, useEffect, useRef } from "react";
import { useQueryParams, A, navigate } from "hookrouter";
import queryString from "query-string";
import { Table, Tag, Space, Input, Button } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import ApiRequest from "../../common/apiRequest";
import { withStyles } from "../../theme/Style";

const Item = ({ classes }) => {
  const [queryParams, setQueryParams] = useQueryParams();
  const [items, setItems] = useState();

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
    }) => {
      const selectValue = selectedKeys[0];

      return (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${dataIndex}`}
            value={selectValue}
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
      );
    },
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    const q = queryParams;
    q[dataIndex] = selectedKeys[0];
    setQueryParams(q, true);
    fetchItems();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setQueryParams({}, true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <A href={`/item/${record.id}`}>{text}</A>,
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
      <div className={classes.addButton}>
        <Button icon={<PlusOutlined />} onClick={() => navigate("/item")}>
          Add New
        </Button>
      </div>
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
  addButton: { textAlign: "right", marginBottom: "8px" },
  padding: { padding: "0 4px" },
  formBox: { width: "400px" },
});

export default withStyles(styles)(Item);
