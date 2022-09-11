import female from './images/femaleProfile.jpg'
import male from './images/maleProfile.jpg'

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClicked,
  handleTeamSelectionChange
}) => {  

  return (
    <main className="container">

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id} key={employee.id}
                  className={(employee.teamName === selectedTeam ? "card m-2 standOut" : "card m-2")}
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClicked}
                >

                  {(employee.gender === 'female') ?
                    <img src={female} className="card-img-top" />
                    :
                    <img src={male} className="card-img-top" />
                  }

                  <div className="card-body">
                    <h5 className="card-tittle">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b>
                      {employee.designation}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )

}
export default Employees