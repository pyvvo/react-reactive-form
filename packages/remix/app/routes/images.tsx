import ImageGrid from "~/components/imageGrid";

import { } from '@remix-run/node'
import { Outlet, useOutletContext } from "@remix-run/react";
import { Title, Text, Box, Group } from "@hm/ui";
import { useRef } from "react";

type ContextType = { modal: Boolean | null };

export function useModal() {
    return useOutletContext<ContextType>();
}

const ImagesView = () => {

    const useref = useRef(null);

    return (
        <div>

           <Group style={{ backgroundColor: 'yellow'}} className="h-80 mt-10" spacing={30} position="center" align="center" onClick={()=> alert("Ha ha ha ha ")}>
           <Text line="overline" fw={"bold"} ff="sans"  cl="#ff58ca" style={{ color:'green'}}>
                Images ?
            </Text>
            <Title ref={useref} onClick={()=> alert(useref.current.innerText)}>
                😉😒😒🙁🙁😎😎
            </Title>
            <Box>
                snijivjvijisd
            </Box>
           </Group>
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