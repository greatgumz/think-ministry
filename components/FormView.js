import dynamic from 'next/dynamic';
const Webix = dynamic(import('./Webix'), { ssr: false });

function getForm(save) {
  return {
    view: 'form',
    elements: [
      { view: 'text', name: 'name', label: 'Name', labelWidth: 100, placeholder: 'Enter your Event Name' },
      { view: 'text', name: 'description', label: 'Description', labelWidth: 100, placeholder: 'Enter your description' },
      { view: 'datepicker', name: 'datepicker', label: 'Date', labelWidth: 100, date: new Date(), timepicker: true },
      {
        cols: [
          {},
          {
            view: 'button',
            value: 'Create Event',
            click: function() {
              if (save) save(this.getFormView().getValues());
            }
          }
        ]
      }
    ]
  };
}

const FormView = ({ data, save }) => <Webix ui={getForm(save)} data={data} />;

export default FormView;
