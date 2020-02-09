import { FETCH_CREATE_CUSTOMER_INVOICE_FAILURE, FETCH_CREATE_CUSTOMER_INVOICE_REQUEST, FETCH_CREATE_CUSTOMER_INVOICE_SUCCESS, FETCH_CUSTOMER_INVOICES_FAILURE, FETCH_CUSTOMER_INVOICES_REQUEST, FETCH_CUSTOMER_INVOICES_SUCCESS, GET_CUSTOMER_INVOICE } from "../types/customerInvoices"

export const customerInvoiceSuccess = users => {
    return {
        type: FETCH_CUSTOMER_INVOICES_SUCCESS,
        payload: users
    }
}

export const customerInvoiceFailure = error => {
    return {
        type: FETCH_CUSTOMER_INVOICES_FAILURE,
        payload: error
    }
}

export const customerInvoiceRequest = () => {
    return {
        type: FETCH_CUSTOMER_INVOICES_REQUEST
    }
}

export const fetchCustomerInvoices = (idCustomer) => {
    return async (dispatch) => {
        dispatch(customerInvoiceRequest())
        try {

            /* dispatch(userSuccess(user)) */
        } catch (error) {
            /* dispatch(usersFailure(error.message)) */
        }
    }
}