import React, { useState } from 'react';
import { Spin, Table, Tooltip } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import CustomPagination from '../../components/Pagination';
import { useFetch } from '../../hooks/useFetchData';
import { usePagination } from '../../hooks/usePagination';
import SearchInput from '../../components/SearchInput';
import { useDebounce } from '../../hooks/useDebounce';

interface Post {
    id: number;
    title: string;
    body: string;
}

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType extends Post {
  key: React.Key;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Sarlavha', dataIndex: 'title', render: (e) => <Tooltip title={e}><p className='truncate w-32'>{e}</p></Tooltip> },
  { title: 'Matn', dataIndex: 'body', render: (e) => <Tooltip title={e}><p className='truncate w-60'>{e}</p></Tooltip> },
  { title: '#id', render: () => "Kassa" },
  { title: '#UserId', dataIndex: 'address', render: () => "Monhetton city Avenue" },
];

const StatisticsPage = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const { page, limit, search } = usePagination();
    const debouncedSearch = useDebounce(search, 500);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const { data, isLoading, isError, error } = useFetch<Post[]>({
        queryKey: ["posts"],
        params: {_page: page, _limit: limit, q: debouncedSearch},
        url: "/posts",
    });
    
    if (isError) return <p>Oops!: {error?.message}</p>;

    return (
        <div className='content'>
                <div className="my-table-wrapper pb-[1px] max-w-[976px] w-full">
                    <Spin spinning={isLoading}>
                        <div className="p-3">
                            <SearchInput />
                        </div>
                        <Table<DataType>
                            rowSelection={rowSelection} 
                            columns={columns} 
                            dataSource={data?.map(item => ({...item, key: item?.id}))}
                            pagination={false}
                            style={{minHeight: 55 * 13}}
                            scroll={{ x: 950 }}
                        />
                        <CustomPagination total={100} />
                    </Spin>
                </div>
        </div>
    )
}
export default StatisticsPage;