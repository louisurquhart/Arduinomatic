import './Dashboard.css'
import DeviceBox from './DeviceBox.jsx'
import {useState} from "react";

function DashboardPage() {
    const username = 'Louis';
    
    // device needs: deviceName, deviceId, batteryPercentage, deviceFunction, deviceStatus
    const [devices, setDevices] = useState([
        { deviceName: 'Device 1', deviceId: '12345', batteryPercentage: 80, deviceFunction: 'Temperature Sensor', deviceStatus: 'Online' },
        { deviceName: 'Device 2', deviceId: '67890', batteryPercentage: 50, deviceFunction: 'Humidity Sensor', deviceStatus: 'Offline' },
        { deviceName: 'Device 3', deviceId: '54321', batteryPercentage: 90, deviceFunction: 'Light Sensor', deviceStatus: 'Online' },
    ]);

    let displayText = `Hello ${username}. You currently have no devices connected`;

    if(devices.length > 0) {
        displayText = `Hello ${username}.`;
    }

    return (
        <div>
            <h1>Louis dashboard</h1>
            <p>{displayText}</p>
            <div>
                {devices.map(device => (
                    <DeviceBox
                        key={device.deviceId}
                        deviceId={device.deviceId}
                        deviceName={device.deviceName}
                        batteryPercentage={device.batteryPercentage}
                        deviceFunction={device.deviceFunction}
                        deviceStatus={device.deviceStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;
