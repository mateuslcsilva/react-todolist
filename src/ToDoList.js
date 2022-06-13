import React from 'react';
import {Grid, Col, Row, Text, Collapse, Popover} from '@nextui-org/react';

const ToDoList = (props) => {

    return (
        <div className='container pt-2'>
            <Grid.Container gap={2} >
                {props.toDoItems.map(item => (
                    <Grid
                        className='to-do-items'
                        key={item.id}
                    >
                        <Collapse
                            className='text-bg-light to-do-item shadow'
                            shadow
                            title={
                                <Row align='center'>
                                    <Text h2 className='me-2'>
                                        {item.titulo}
                                    </Text>
                                    <Popover placement='right-top'>
                                        <Popover.Trigger>
                                            <button className='btn btn-outline-secondary btn-sm  '><i className="fa-solid fa-wrench "></i></button>
                                        </Popover.Trigger>
                                        <Popover.Content className='border border-primary pb-2' css={{w:'15%'}}>
                                            <Col justify='center' align='center'>
                                                <Text css={{ p: "$10" }}>
                                                    O que deseja fazer?
                                                </Text>
                                                <Col>
                                                <button
                                                    className='btn btn-outline-danger btn-sm col-6 '
                                                    onClick={() => props.deleteToDoItem(item.id)}
                                                >
                                                    <i className="me-2 fa-solid fa-trash"></i>
                                                    Excluir
                                                </button>
                                                <div className='w-100 mb-2'></div>
                                                <button
                                                    className='btn btn-outline-primary btn-sm col-6 '
                                                    onClick={() => props.getItem(item.id)}
                                                >
                                                    <i className="fa-solid fa-pencil me-2 "></i>
                                                    Editar
                                                </button>
                                                <div className='w-100 mb-2'></div>
                                                <button
                                                    className='btn btn-outline-success btn-sm mb-3 col-6 '
                                                    onClick={() => props.done(item.id)}
                                                >
                                                    <i className="me-2 fa-solid fa-check"></i>
                                                    Concluir
                                                </button>
                                                </Col>
                                            </Col>
                                        </Popover.Content>
                                    </Popover>
                                </Row>}
                            subtitle={
                                <Text h4>
                                   {' Prioridade: '}
                                    <span className={'text-' + props.selectedButtonColor(item.prioridade, true)}>
                                        {item.prioridade}
                                    </span>
                                </Text>}
                        >
                            <Text>
                                {item.descricao}
                            </Text>
                        </Collapse>
                    </Grid>
                ))}
            </Grid.Container>
        </div>
    )
}

export default ToDoList