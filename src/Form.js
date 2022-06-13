
import React from 'react';
import { useState } from 'react'
import { Input, Spacer, Dropdown, Row, Textarea } from '@nextui-org/react';
import './Form.css'
import ToDoList from './ToDoList'
import DoneList from './DoneList';

const Form = () => {

  let toDoItemsArray = []
  let doneItemsArray = []
  const InitialSelectedValue = 'Prioridade'
  const initialInputValue = ''

  const [selected, setSelected] = React.useState(new Set([InitialSelectedValue]));
  const [selectedColor, setSelectedColor] = React.useState(new Set(['primary']))
  const [toDoItems, setToDoItems] = React.useState([...toDoItemsArray])
  const [doneItems, setDoneItems] = React.useState([...doneItemsArray])
  const [inputTittleValue, setInputTittleValue] = useState(initialInputValue)
  const [inputTextValue, setInputTextValue] = useState(initialInputValue)

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const selectedButtonColor = (selectedValue, bootstrap) => {
    switch (selectedValue) {
      case 'Baixa':
        return 'primary'
      case 'Média':
        return 'warning'
      case 'Alta':
        return bootstrap ? 'danger' : 'error'
      default:
        return 'Primary'
    }
  }

  const toDoItem = (e) => {
    e.preventDefault()

    if (selectedValue == 'Prioridade' || !inputTittleValue || !inputTextValue) return alert('Preencha todos os campos.')


    let item = {
      titulo: inputTittleValue,
      descricao: inputTextValue,
      prioridade: selectedValue,
      id: '' + toDoItems.length + inputTittleValue + document.querySelector('#descricao').value
    }

    toDoItems.push(item)
    setToDoItems([...toDoItems])

    setInputTittleValue('')
    setInputTextValue('')
    setSelected([InitialSelectedValue])
  }

  const deleteToDoItem = (id) => {
    let newArray = toDoItems.filter(item => item.id != id)
    setToDoItems([...newArray])
  }

  const getItem = (id) => {
    let newArray = toDoItems.filter(item => item.id != id)
    let selectedArray = toDoItems.filter(item => item.id = id)
    setToDoItems([...newArray])
    setInputTextValue(selectedArray[0].descricao)
    setInputTittleValue(selectedArray[0].titulo)
  }

  const done = (id) => {
    let newArray = toDoItems.filter(item => item.id != id)
    let selectedArray = toDoItems.filter(item => item.id == id)
    doneItems.push(selectedArray[0])
    setToDoItems([...newArray])
    setDoneItems([...doneItems])

  }

  const deleteDoneItem = (id) => {
    let newArray = doneItems.filter(item => item.id != id)
    setDoneItems([...newArray])
  }



  return (
    <div className=' div'>
      <div className='container container-lg pb-4 mt-2 border rounded text-bg-light shadow'>
        <Spacer y={1.5} />
        <Row justify='center'>
          <div className='me-4' css={{ me: '20%' }}>
            <Dropdown>
              <Dropdown.Button
                solid
                color={
                  selectedValue != 'Prioridade' ?
                    selectedButtonColor(selectedValue)
                    :
                    'primary'
                }
              >{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                variant="solid"
                className='border rounded text-bg-light'
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                selectedColor={selectedColor}
                onSelectionChange={setSelected}
                onSelectionChangeColor={setSelectedColor}
              >
                <Dropdown.Item key="Baixa" color='primary'>Baixa</Dropdown.Item>
                <Dropdown.Item key="Média" color='warning'>Média</Dropdown.Item>
                <Dropdown.Item key="Alta" color="error">
                  Alta
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Input
            id='titulo'
            clearable
            underlined
            color="primary"
            labelPlaceholder="Título"
            className='me-3 input-titulo'
            css={{ w: '40%' }}
            onChange={(e) => setInputTittleValue(e.target.value)}
            value={inputTittleValue}
          />
        </Row>
        <Spacer y={2} />
        <Row justify='center'>
          <Textarea
            minRows={2}
            id='descricao'
            underlined
            color="primary"
            labelPlaceholder="Descrição"
            css={{ w: '80%' }}
            onChange={(e) => setInputTextValue(e.target.value)}
            value={inputTextValue}
          />
        </Row>
        <Spacer y={1} />
        <Row justify='end'>
          <button className='btn btn-outline-primary' onClick={toDoItem}>+ Tarefa</button>
        </Row>
      </div>
      <ToDoList toDoItems={toDoItems}
        deleteToDoItem={deleteToDoItem}
        selectedButtonColor={selectedButtonColor}
        getItem={getItem}
        done={done}
      />
      <DoneList DoneItems={doneItems}
        deleteToDoItem={deleteToDoItem}
        selectedButtonColor={selectedButtonColor}
        deleteDoneItem={deleteDoneItem}
        />
    </div>
  )

}

export default Form
