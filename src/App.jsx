
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'Shoyo Hinata', status: 'Present' },
    { id: 2, name: 'Kenma Kozume', status: 'Absent' },
    { id: 3, name: 'Katsuki Bakugo', status: 'Present' },
    { id: 4, name: 'Columbina Hyposelenia', status: 'Absent' },
    { id: 5, name: 'Hush', status: 'Present' },
    { id: 6, name: 'Mina Ashido', status: 'Present' },
    { id: 7, name: 'Kuroo Tetsurou', status: 'Absent' },
    { id: 8, name: 'Rin Okumura', status: 'Present' },
    { id: 9, name: 'Yato', status: 'Absent' },
    { id: 10, name: 'Killua Zoldyck', status: 'Present' },
  ];

  const presentCount = students.filter(
    student => student.status === 'Present'
  ).length;

  const absentCount = students.filter(
    student => student.status === 'Absent'
  ).length;

  return (
    <main className="page">
      <section className="receipt">

        <header className="receipt-header">
          <p className="small-text">★ CLASSROOM RECEIPTIFY ★</p>
          <h1>STUDENT<br />BSCS 3 - A ATTENDANCE</h1>
          <p>CLASS RECORDS</p>
        </header>

        <div className="receipt-divider">
          --------------------------------
        </div>

        <div className="receipt-info">
          <p>DATE: {new Date().toLocaleDateString()}</p>
          <p>RECORD NO: 001</p>
        </div>

        <div className="summary">
          <div>
            <span>PRESENT</span>
            <strong>{presentCount}</strong>
          </div>
          <div>
            <span>ABSENT</span>
            <strong>{absentCount}</strong>
          </div>
        </div>

        <div className="receipt-divider">
          --------------------------------
        </div>

        <div className="table-heading">
          <span>NO.</span>
          <span>STUDENT NAME</span>
          <span>STATUS</span>
        </div>

        <div className="student-list">
          {students.map((student, index) => (
            <div className="student-row" key={student.id}>
              <span>{index + 1}.</span>
              <span className="name">{student.name}</span>

              <span
                className={`status ${
                  student.status === 'Present'
                    ? 'present'
                    : 'absent'
                }`}
              >
                {student.status === 'Present'
                  ? 'PRESENT'
                  : 'ABSENT'}
              </span>
            </div>
          ))}
        </div>

        <div className="receipt-divider">
          --------------------------------
        </div>

        <div className="receipt-footer">
          <p>ATTENDANCE SUMMARY COMPLETE!</p>
          <p>THANK YOU & HAVE A NICE DAY!</p>
          <p className="heart">♥ ♥ ♥</p>
          <p className="barcode">|||| ||| || |||| ||| ||</p>
          <small>END OF RECEIPT - 001</small>
        </div>

      </section>
    </main>
  );
}

export default App;
