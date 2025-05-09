"use client";

import Image from "next/image";

import CreateNodeMenuPNG from "./(img)/create_node_menu.png";
import NodeWithNoPort from "./(img)/node_with_no_port.png";
import NodeInputOutputPNG from "./(img)/node_io.png";
import NodeWithPortsPNG from "./(img)/node_with_ports.png";
import CommpletedNodeNoStyle from "./(img)/completed_node_no_style.png";
import CommpletedNodeWithStyle from "./(img)/completed_node_with_style.png";

import ProjectPage from "@/components/ProjectPage";
import PrismGist from "@/components/PrismGist";

const FlowGraphPage = () => {
    return (
        <>
            <ProjectPage
                title="Flow Graph"
                githubUrl="https://github.com/basdidon/H8-FlowGraph"
                videoUrl="https://www.youtube.com/embed/0DVR4JZOncA?si=1RB9-2KmMiX9f6Zm"
            >
                <div className="w-full">
                    <p>
                        &emsp;&emsp;a tool for store dialogues into Unity&apos;s ScriptableObject,
                        and visualize it on Unity&apos;s GraphView, make them easier to read and
                        edit, allow user to create custom Node and Port by script
                    </p>
                </div>
                <div className="w-full space-y-2 mt-2">
                    <h3 className="text-lg md:text-2xl">Installation</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            In UnityEditor, open{" "}
                            <span className="font-bold">
                                {" "}
                                PackageManager Window &gt; Package Manager
                            </span>{" "}
                        </li>
                        <li>
                            Click a plus sign button on the most top-left, then select{" "}
                            <span className="font-bold">add package from git URL</span>
                        </li>
                        <li>enter TextField with this git URL, then press add button</li>
                    </ul>
                </div>
                <div className="w-full space-y-4 mt-2">
                    <h3 className="text-lg md:text-2xl">Create Custom Node</h3>
                    <p>
                        &emsp;&emsp;First create class that Extends BaseNode and Defined{" "}
                        <code>
                            [<span className="text-lime-300">CreateCustomNode</span>()]
                        </code>
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_01.cs"
                    />
                    <p>
                        &emsp;&emsp;Now you can create node by open graphTree and right-click on
                        empty space, then select
                        <span className="ms-1 font-bold">Player &gt; GainMoney</span>
                    </p>
                    <Image src={CreateNodeMenuPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;And a node will look like the image below because we have not
                        defined the port yet.
                    </p>
                    <Image src={NodeWithNoPort} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;Next, let create port Input port with type{" "}
                        <span className="text-yellow-500">ExecutionFlow </span>
                        by declare Getter name it as &quot;Input&quot; and define Attrbute{" "}
                        <code>
                            &#91;<span className="text-lime-300">Input</span>&#93;
                        </code>{" "}
                        to tell FlowGraph this is a input port.
                    </p>
                    <p>
                        &emsp;&emsp;Declare another port with same type but name it as
                        &quot;Output&quot; and define Attrbute{" "}
                        <code>
                            &#91;<span className="text-lime-300">Output</span>&#93;
                        </code>{" "}
                        to tell FlowGraph this is a output port.
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_02.cs"
                    />
                    <p>
                        &emsp;&emsp;Now if you go back to GraphTree, Graph will re-render and node
                        will be added by ports, like below.
                    </p>
                    <Image src={NodeInputOutputPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;You can plug it into another port with same type, but not on the
                        same node, and not on the same direction.
                    </p>
                    <p>
                        &emsp;&emsp;Next step, Create port with type int name it as MoneyToGain like
                        following code.
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_03.cs"
                    />
                    <Image src={NodeWithPortsPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;Node that have a{" "}
                        <span className="text-yellow-500">ExecutionFlow </span> port, won&apos;t be
                        performed until Node implements{" "}
                        <span className="text-yellow-500">IExecutableNode </span>
                    </p>
                    <ul className="list-disc list-inside ms-24">
                        <li>OnEnter() : Method called when a controller entering the node.</li>
                        <li>OnExit() : Method called when a controller exiting the node.</li>
                        <li>Action() : Method for executing an action on the node.</li>
                    </ul>
                    <p>
                        &emsp;&emsp;So we need to implements{" "}
                        <span className="text-yellow-500">IExecutableNode </span>. And when
                        OnEnter() we increase Player&apos;s Money and Move To Next Node.
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_04.cs"
                    />
                    <p>
                        &emsp;&emsp;We can&apos;t read a value from MoneyToGain because we never set
                        a value to it. Let&apos;s imagine that when we read data from this port, we
                        need to find the port that connects to it. Then we read data from that port
                        and return it. Otherwise, if it doesn&apos;t connect to any other port, it
                        should return the default value. But don&apos;t worry, we have the method
                        <code className="px-3">
                            <span className="text-lime-300">GetInputValue</span>
                            (portName,defaultValue)
                        </code>
                        to do that for us. So we just apply this method to our code.
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_05.cs"
                    />
                    <p>
                        &emsp;&emsp;we can create backingField by declaring a field with the same
                        type of port. And add name of that field to{" "}
                        <code>
                            &#91;<span className="text-lime-300">Input</span>&#93;
                        </code>{" "}
                        or{" "}
                        <code>
                            &#91;<span className="text-lime-300">Output</span>&#93;
                        </code>{" "}
                        , After that we need to set backingField&apos;s value to default port value
                        by replace default value in
                        <code className="px-3">
                            <span className="text-lime-300">GetInputValue</span>
                            (portName,defaultValue)
                        </code>
                    </p>
                    <div className="flex justify-center">
                        <div className="w-32 bg-red-500">I'm centered</div>
                    </div>
                    <div className="flex-1 justify-center">
                        <PrismGist
                            classname="md:w-4/5"
                            codeLang="CSharp"
                            gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_06.cs"
                        />
                    </div>
                    <Image src={CommpletedNodeNoStyle} alt="" className="mx-auto" />
                    <p>
                        &emsp;&emsp;Finally, You can changed background color and text color of the
                        header. by create new class extend <code>NodeView</code> and define{" "}
                        <code>
                            &#91;<span className="text-lime-300">CustomNodeView</span>&#93;
                        </code>{" "}
                        and override both color like following code.
                    </p>
                    <PrismGist
                        classname="w-full md:w-4/5 mx-auto rounded-lg"
                        codeLang="CSharp"
                        gistRawFileUrl="https://gist.githubusercontent.com/basdidon/58f858dca0bb4bf1da3b7b1ddd1829c4/raw/3fb29acc6db52c7e2c59bf9123911dc0b7fae322/Flowgraph_example_07_styling.cs"
                    />
                    <Image src={CommpletedNodeWithStyle} alt="" className="mx-auto" />
                </div>
            </ProjectPage>
        </>
    );
};

export default FlowGraphPage;
