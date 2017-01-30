package ae.etisalat.eim.ocr.gateway.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the ServiceWf entity.
 */
public class ServiceWfDTO implements Serializable {

    private Long id;

    @NotNull
    private Integer statusId;

    @NotNull
    private String createdBy;

    private String updatedBy;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }
    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ServiceWfDTO serviceWfDTO = (ServiceWfDTO) o;

        if ( ! Objects.equals(id, serviceWfDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ServiceWfDTO{" +
            "id=" + id +
            ", statusId='" + statusId + "'" +
            ", createdBy='" + createdBy + "'" +
            ", updatedBy='" + updatedBy + "'" +
            '}';
    }
}
