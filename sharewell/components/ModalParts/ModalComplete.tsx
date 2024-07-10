import ModalHeader from './ModalHeader';
import ModalBodyOne from './ModalBodyOne';
import ModalBodyTwo from './ModalBodyTwo';
import ModalFooter from './ModalFooter';

const ModalComplete: React.FC = () => {
    return (
        <div className="flex w-[640px] flex-col items-center rounded-xl bg-white">
            <ModalHeader />
            <ModalBodyOne />
            <ModalBodyTwo />
            <ModalFooter />
        </div>
    );
}

export default ModalComplete;
