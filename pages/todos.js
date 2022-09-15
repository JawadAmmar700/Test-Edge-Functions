import React from 'react'

export const config = {
    runtime: 'experimental-edge',
  }
  
  export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
  
    return {
      props: {
        data
      },
    }
  }
  

const Todos = ({data}) => {
  return (
    <div>{
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))
        
      }</div>
  )
}

export default Todos