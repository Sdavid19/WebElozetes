const manage = async (Model, view, req, res) => {
    try {
        const data = await Model.findAll({limit: 100});
        const modelKeys = Object.keys(Model.getAttributes());
        const tableName = Model.tableName;
        console.log(tableName);

        res.render(view, {
            data: data, keys: modelKeys, table: tableName});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error!' });
      }
}

const get = async (Model, req, res) => {
        try {
        const data = await Model.findAll();
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error!' });
      }
}

const insert = async (Model, req, res) => {
    try {
        const newData = await Model.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Error creating data' });
    }
}

const update = async (Model, req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const record = await Model.findByPk(id);
    
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }

        await record.update(body);

        return res.status(200).json({ message: 'Record updated successfully', record });
    } catch (error) {
        console.error('Error updating record:', error);
        return res.status(500).json({ message: 'Internal server error' });
  }
}

const del = async (Model, req, res) => {
    try {
        const id  = parseInt(req.params.id);
        const record = await Model.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }
        await record.destroy();
        return res.status(204).send();
    } catch (error) {
        console.error('Error deleting record:', error);
        return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {manage, get, insert, update, del };