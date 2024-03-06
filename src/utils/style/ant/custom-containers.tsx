import { LinkButton, PrimaryButton, OutlineButton } from '@utils/style/ant/custom';
import { Modal } from 'antd';
import { ResultWindow } from '@components/result';

export const ButtonContainer = ({ type, name, ...props }) => (
    <>
        {
            type === 'submit' ? (
                <PrimaryButton {...props}>
                    {name}
                </PrimaryButton>
            ) : (
                type === 'outline' ? (
                    <OutlineButton {...props}>
                        {name}
                    </OutlineButton>
                ) : (
                    <LinkButton {...props}>
                        {name}
                    </LinkButton>
                )
            )
        }
    </>
);

export const ModalResultContainer = ({ open, data, handleClickOk, ...props }) => (
    <Modal
        width={'auto'}
        zIndex={100}
        bodyStyle={{ padding: 0 }}
        centered
        open={open}
        footer={null}
        title={null}
        closable={false}
        maskClosable={false}
        maskStyle={{
            backdropFilter: 'blur(5px)',
            background: 'rgba(121, 156, 212, 0.5)'
        }}>
        <ResultWindow
            data={data}
            handleClickOk={handleClickOk}
            {...props}
        />
    </Modal>
)
