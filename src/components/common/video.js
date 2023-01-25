import { Box, Modal } from '@mui/material';
import React from 'react';

export default function Video({ open, handleClose, src }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4
                }}>
                <video width="100%" height="540" controls="controls" autoPlay>
                    <source src={src} type="video/mp4" />
                </video>
            </Box>
        </Modal>
    );
}
