import React from 'react';
import {Grid, Col, Row, Text, Collapse, Popover} from '@nextui-org/react';

const DoneList = (props) => {

    if(!props) return
    return (
        <div className='container pt-4 mt-4'>
            
            <Grid.Container gap={2} >
                {props.DoneItems.map(item => (
                    <Grid
                        className='to-do-items'
                        key={item.id}
                    >
                        <Collapse
                            className='text-bg-light to-do-item border border-success shadow'
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
                                                    onClick={() => props.deleteDoneItem(item.id)}
                                                >
                                                    Confirmar
                                                </button>
                                            </Col>
                                        </Popover.Content>
                                    </Popover>
                                </Row>}
                            subtitle={
                                <Text h4 className='text-success'>
                                    <i className="me-2 fa-solid fa-check"></i>
                                    Concluído
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

export default DoneList