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
                            className='text-bg-light to-do-item'
                            shadow
                            title={
                                <Row align='center'>
                                    <Text h2 className='me-2'>
                                        {item.titulo}
                                    </Text>
                                    <Popover placement='right-bottom'>
                                        <Popover.Trigger>
                                            <button className='btn btn-outline-danger btn-sm '><i className="me-1 fa-solid fa-trash"> </i>Excluir</button>
                                        </Popover.Trigger>
                                        <Popover.Content className='border border-danger pb-2'>
                                            <Col justify='center' align='center'>
                                                <Text css={{ p: "$10" }}>
                                                    Tem certeza que deseja excluir?
                                                </Text>
                                                <button
                                                    className='btn btn-outline-danger btn-sm '
                                                    onClick={() => props.deleteToDoItem(item.id)}
                                                >
                                                    Confirmar
                                                </button>
                                            </Col>
                                        </Popover.Content>
                                    </Popover>
                                </Row>}
                            subtitle={
                                <Text h4>
                                    Prioridade:
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