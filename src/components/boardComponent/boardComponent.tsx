import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";
import { showRootComponent } from "../../Common";

interface IBoardComponentProps {
    projectId?: string;
    organizationName?: string;
}

interface IBoardComponentState {
    projectId?: string;
}

class BoardComponent extends React.Component<IBoardComponentProps, IBoardComponentState> {

    constructor(props: {}) {
        super(props);

        this.state = {}
    }

    public componentDidMount(){
        SDK.init();
        //outras propriedades para inicialização
    }

    public render() : JSX.Element {
        return (
            <div />
        );
    }

}

showRootComponent(<BoardComponent />);