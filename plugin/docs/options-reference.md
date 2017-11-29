# 1.0.0 Options Reference

## Plugin Options

### Required
* `transport`: (function) A nodemailer transporter that has been configured
* `fromAddress`: (string) The email address that emails will be sent from.

### Optional
* `env`: (string enum) The current environment that server is running in, valid options below.
    * development
    * local
    * production
* `templateSettings`: (object) Settings that will be passed to all templates, see theme options below.

## Route Options

### Required
* `component`: (function) A React component that uses [mjml](http://mjml.io) for rendering
* `subject`: (string) A email subject that will be sent to the email client.

## Template Settings

All template options are optional. If address, header image, or contact is not passed to the plugin, then props are required for their components.

If a value is set for anything, all values will be overwritten. For instance, if a color template setting is set, secondary, danger, success, etc. will no longer be available unless used in the new value.

If a setting is included, then the nested values will be required if marked as such.

* `colors`: (object) An object that includes a key (e.g. primary) and a hex string (e.g. `'#ECECEC'`).
    * `primary`: (string) A primary color to be used, **required**
* `header`: (object) An object that affects the header settings
    * `img`: (object) An object that includes image data for headers
        * `src`: (string) A url for the image source **required**
        * `alt`: (string) An alt tag describing the image **required**
* `address`: (object) An object that has address information for use in address components
    * `name`: (string)  **required**
    * `addressLine1`: (string) **required**
    * `addressLine2`: (string) **required**
    * `city`: (string) **required**
    * `state`: (string) **required**
    * `zip`: (string) **required**
    * `country` (string) **required**
* `contact` (array[object]) An array of objects with contact information
    * `name`: (string) Name describing the contact method
    * `value`: (string) Value of what will actually be displayed to user **required**
    * `href`: (string) Link for the contact (e.g. `'mailto:noreply@gmail.com'`)
    * `type`: (string enum) The type of contact. See below for possible values. **required**
        * phone
        * email
        * website
        * fax

### Default Template Settings

* `colors`: An object including possible color types
    * `primary`: <span style="display: inline-block; background-color: #9b59b6; width: 15px; height: 15px; margin-right:5px;"></span>#9b59b6
    * `secondary`: <span style="display: inline-block; background-color: #95a5a6; width: 15px; height: 15px; margin-right:5px;"></span>#95a5a6
    * `danger`: <span style="display: inline-block; background-color: #f64747; width: 15px; height: 15px; margin-right:5px;"></span>#f64747
    * `success`: <span style="display: inline-block; background-color: #2ecc71; width: 15px; height: 15px; margin-right:5px;"></span>#2ecc71
    * `warning`: <span style="display: inline-block; background-color: #e67e22; width: 15px; height: 15px; margin-right:5px;"></span>#e67e22
