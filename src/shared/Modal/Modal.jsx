import { useState } from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Select,
  Button,
  Backdrop,
} from "./Modal.style";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { rewardsClaim, selectPayments } from "../../features/dashboardSlice";

const Modal = ({ isOpen, onClose, rewardId }) => {
  const dispatch = useDispatch();
  //selectedPayment is id of an option selected below
  const [selectedPayment, setSelectedPayment] = useState("");
  const payments = useSelector(selectPayments);

  return (
    isOpen && (
      <Backdrop>
        <ModalContainer>
          <ModalHeader>
            <h2>Select Payment method</h2>
          </ModalHeader>
          <ModalContent>
            <label htmlFor="reward-select">Select Payment Method</label>
            <Select
              id="reward-select"
              value={selectedPayment}
              onChange={(e) => setSelectedPayment(e.target.value)}
            >
              <option value="">Select Payment</option>
              {payments.map((payment) => (
                <option key={payment?._id} value={payment?._id}>
                  {payment?.title}
                </option>
              ))}
            </Select>
          </ModalContent>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button
              primary
              onClick={() => {
                onClose();
                dispatch(
                  rewardsClaim({
                    rewardId: rewardId,
                    paymentTypeId: selectedPayment,
                  })
                ).then((res) => {
                  alert(res.payload.data.message);
                });
                window.location.reload();
              }}
            >
              Withdraw
            </Button>
          </ModalFooter>
        </ModalContainer>
      </Backdrop>
    )
  );
};

export default Modal;
Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
  rewardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
