import React, { useState } from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import { Question } from 'data/question'
const PaginationComponent = ({ props }: any) => {
  console.log(props.elementPerPage)
  const totalPage = Math.ceil(props.data.length / props.elementPerPage) * 10

  const onChange: PaginationProps['onChange'] = page => {
    props.setCurrentPage(page)
    console.log('123')
  }
  return <Pagination defaultCurrent={1} total={totalPage} onChange={onChange} />
}

export default PaginationComponent
