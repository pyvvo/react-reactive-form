import ImageGrid from "~/components/imageGrid";

import { } from '@remix-run/node'
import { Outlet, useOutletContext } from "@remix-run/react";

type ContextType = { modal: Boolean | null };

export function useModal() {
    return useOutletContext<ContextType>();
}

const ImagesView = () => {
    return (
        <div>
            Images
            <ImageGrid />

            {/* {searchParams.get("imageId") &&
                <Modal isOpen={true} onClose={closeModal}>
                    <SingleImage />
                </Modal>} */}
            <Outlet context={{ modal: true }} />
        </div>
    );
}

export default ImagesView;