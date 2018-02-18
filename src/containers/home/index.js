import React from 'react';
import { Modal, Button, Radio, Grid, Row , Col, FormGroup, ControlLabel, FormControl,HelpBlock} from 'react-bootstrap';

// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter'

const Home = props => (
  <div class="container">
  <Row>
    <Col xs={12} md={12} className="answer">
        <div className='tituloGeneral' >Bienvenida al experimento de atracción física </div>
        <hr/>
        <div className='text-justify instruccionesGeneral'> 
            <p>
            Este experimento no pone en riesgo tu salud y los datos que nos proporciones serán confidenciales para uso exclusivo del experimentador. Al terminar tu participación en este estudio, se te proveerá una breve explicación sobre los objetivos de nuestra investigación, cabe mencionar que puedes detenerte en cualquier momento si te sientes incomoda.
            </p>

        </div>
    <br/>
    <div className="seleccionaGeneral">Selecciona la siguiente informacion para iniciar el Experimento...</div>
    <br/>
    <Grid>
      <Row >
        <Col xs={12} md={6} className="answer">
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Genero</ControlLabel><br/>
            <Row>
                <Col xs={12} md={2} className="answer">
                    <Radio name="sexChecked">
                        Femenino    
                    </Radio>
                </Col>
            </Row>
          </FormGroup>
          </Col>
        <Col xs={12} md={6} className="answer">
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Edad</ControlLabel>
            <FormControl componentClass="select" 
              name="edad">
              <option value={0}>Selecciona</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="answer">
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Nivel de Estudios</ControlLabel>
            <FormControl componentClass="select" 
              name="nivelEstudios">
              <option value={0}>Selecciona</option>
              <option value={1}>Sin Estudios</option>
              <option value={2}>Primaria</option>
              <option value={3}>Secundaria</option>
              <option value={4}>Preparatoria</option>
              <option value={5}>Licenciatura | Ingenieria</option>
              <option value={6}>Postgrado</option>
            </FormControl>
          </FormGroup>
        </Col>
    
        <Col xs={12} md={6} className="answer">
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Estado Civil</ControlLabel>
            <FormControl componentClass="select" 
              name="estadoCivil">
              <option value={0}>Selecciona</option>
              <option value={1}>Soltera </option>
              <option value={2}>Casada</option>
              <option value={3}>Viuda</option>
              <option value={4}>Divorciada</option>
              <option value={5}>Union libre</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
    </Grid>
    </Col>
    <Col xs={12} md={12} className="answer aceptTerms"><br/>
    <div className="aceptTerms">Al presionar “continuar” acepta los términos antes expuestos.</div>
    </Col>
    <Col xs={12} md={12} className="answer aceptTerms"><br/>
    <button type="button" class="btn btn-primary">Continuar</button>
    </Col>
</Row>
</div>
)

// const mapStateToProps = state => ({
//   count: state.counter.count,
//   isIncrementing: state.counter.isIncrementing,
//   isDecrementing: state.counter.isDecrementing
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync,
//   changePage: () => push('/about-us')
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
export default Home;

