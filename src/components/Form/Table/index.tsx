import { ClientesDataProps } from "~/pages/clientes/interfaces";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, ReactElement } from "react";

import S from "./styles";

interface TableFormProps {
  columns: ColumnsType<ClientesDataProps>;
  data: ClientesDataProps[];
}

const TableForm: FC<TableFormProps> = ({ columns, data }): ReactElement => {
  return (
    <S.Container>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
        size="large"
      />
    </S.Container>
  );
};

export default TableForm;
