import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ConfirmAlert(props) {
  const { show, setShow, handleDelete, deleteTitle } = props;
  if (show) {
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Delete Blog</Alert.Heading>
          <p>{`Bạn có muốn xoá Blog ${deleteTitle} ?`}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                handleDelete();
                setShow(false);
              }}
              variant="outline-success"
            >
              Ok
            </Button>
          </div>
        </Alert>
      </>
    );
  }
}

export default ConfirmAlert;
