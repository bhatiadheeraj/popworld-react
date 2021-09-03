import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";

export default class HelpForm extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* About Card */}
        <Card
          style={{
            // position: "absolute",
            // alignSelf: "center",
            // marginTop: "160px",
            // marginLeft: "85px",
            // width: "75rem",
            // fontSize: 20,
            position: 'absolute', 
            top:'10em',
            left:'15em',
            right:'15em',
            width: "auto",
            opacity: "0.95",
            zIndex:'2'
            
          }}
        >
          <Card.Header className="help-header">
            <b>
              <i> ABOUT THE MODULES.. </i>{" "}
            </b>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Table striped bordered hover className='table-responsive'>
                <thead className="text-center">
                  <tr>
                    <th>#</th>
                    <th>MODULE NAME</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>

                <tbody>
                  
                  <tr>
                    <td>1</td>
                    <td className="text-center"> BASIC </td>
                    <td>
                      {" "}
                      <i>No Evolutionary Forces.</i>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>2</td>
                    <td className="text-center"> MIGRATION</td>
                    <td>
                      <i>
                        Members of a different population join the focus
                        population.
                      </i>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>3</td>
                    <td className="text-center"> DRIFT </td>
                    <td>
                      <i>
                        Change in Allele frequency due to randon sampling or
                        chance events.
                      </i>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>4</td>
                    <td className="text-center"> NR-MATING </td>
                    <td>
                      <i>
                        {" "}
                        Mate choice between lizards is based on phenotype or
                        location and not random.{" "}
                      </i>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>5</td>
                    <td className="text-center"> MUTATION </td>
                    <td>
                      {" "}
                      <i>
                        {" "}
                        Chance that one Allele may randomly change to another
                        Allele.{" "}
                      </i>{" "}
                    </td>
                  </tr>
                  
                  <tr>
                    <td>6</td>
                    <td className="text-center"> SELECTION </td>
                    <td>
                      {" "}
                      <i>
                        One phenotype has advantage over the other against
                        outside forces.
                      </i>{" "}
                    </td>
                  </tr>
                  
                  <tr>
                    <td>7</td>
                    <td className="text-center"> MUTATION + SELECTION </td>
                    <td>
                      {" "}
                      <i>(*Requires information*) </i>
                    </td>
                  </tr>

                  <tr> <td colSpan="3"></td> </tr>           

                  <tr>
                    <td colSpan="3" style={{ fontSize:23, color:"red" }}>
                        <i> <font color="black"><u>NOTE</u>:</font> To preserve values for a new calculation press RESTART first and then change the inputs in the fields.</i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
