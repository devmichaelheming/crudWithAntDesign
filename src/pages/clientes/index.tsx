import { DeleteOutlined, EditOutlined, MenuOutlined } from "~/assets/icons";
import { Table } from "~/components/Form";
import dataClients from "~/data/clientsDb.json";
import S from "~/styles/styles";
import { Menu, Dropdown } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, ReactElement } from "react";

import { ClientesDataProps } from "./interfaces";

const clientes: FC = (): ReactElement => {
  const handleEdit = (data: ClientesDataProps) => {
    console.log(data);
  };

  const handleDelete = (id: number) => {
    console.log(id);
  };

  const columns: ColumnsType<ClientesDataProps> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "firstName",
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "update_at",
      dataIndex: "update_at",
      key: "update_at",
    },
    {
      title: "Ações",
      dataIndex: "cor",
      align: "center",
      render: (value, data) => {
        return (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item onClick={() => handleEdit(data)}>
                  <EditOutlined />
                  Editar
                </Menu.Item>
                <Menu.Item onClick={() => handleDelete(data.id)}>
                  <DeleteOutlined />
                  Excluir
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
            arrow
          >
            <MenuOutlined />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <S.Container>
      <S.Title>clientes</S.Title>
      <Table columns={columns} data={dataClients} />
    </S.Container>
  );
};

export default clientes;
