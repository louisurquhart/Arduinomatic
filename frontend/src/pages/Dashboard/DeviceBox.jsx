export default function DeviceBox({deviceName, deviceId, batteryPercentage, deviceFunction, deviceStatus}) {
    return (
        <div className="border-2 border-black rounded-lg p-4 m-2">
            <h1>{deviceName}</h1>
            <p>{deviceId}</p>
            <p>{batteryPercentage}</p>
            <p>{deviceFunction}</p>
            <p>{deviceStatus}</p>
        </div>
    );
}
