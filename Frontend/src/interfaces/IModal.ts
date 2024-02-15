export interface IModal {
  modalIsOpen: boolean,
  closeModal: () => void,
  children: React.ReactNode
}